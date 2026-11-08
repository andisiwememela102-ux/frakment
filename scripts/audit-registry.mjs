import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
const MANIFEST="frakment.json",REGISTRY="registry",UI="components/ui";
const pkgName=(d)=>{if(d.startsWith("@")){const i=d.indexOf("@",1);return i>0?d.slice(0,i):d;}return d.split("@")[0];};
let errors=0;const fail=(m)=>{console.log("  ❌ "+m);errors++;};
const manifest=JSON.parse(fs.readFileSync(MANIFEST,"utf8"));
const tracked=["radix-ui","class-variance-authority","lucide-react","motion","@number-flow/react","input-otp","sonner","next-themes","ai","@frakment/ai","@frakment/react"];
const pats={"radix-ui":/from\s+["']radix-ui["']|from\s+["']@radix-ui\//,"class-variance-authority":/from\s+["']class-variance-authority["']/,"lucide-react":/from\s+["']lucide-react["']/,"motion":/from\s+["']motion\/react["']|from\s+["']motion["']/,"@number-flow/react":/from\s+["']@number-flow\/react["']/,"input-otp":/from\s+["']input-otp["']/,"sonner":/from\s+["']sonner["']/,"next-themes":/from\s+["']next-themes["']/,"ai":/from\s+["']ai["']/,"@frakment/ai":/from\s+["']@frakment\/ai["']/,"@frakment/react":/from\s+["']@frakment\/react["']/};
console.log("Audit: imports vs manifest");
for(const c of manifest.components){const p=path.join(REGISTRY,c.name+".tsx");if(!fs.existsSync(p))continue;const s=fs.readFileSync(p,"utf8");const d=new Set((c.dependencies||[]).map(pkgName));for(const pkg of tracked){if(pats[pkg].test(s)&&!d.has(pkg))fail(`${c.name}: imports ${pkg} not declared`);}}
console.log("\nAudit: registry/ vs components/ui/ identical");
for(const c of manifest.components){const r=path.join(REGISTRY,c.name+".tsx");const u=path.join(UI,c.name+".tsx");if(!fs.existsSync(r)||!fs.existsSync(u))continue;const h1=crypto.createHash("sha256").update(fs.readFileSync(r)).digest("hex");const h2=crypto.createHash("sha256").update(fs.readFileSync(u)).digest("hex");if(h1!==h2)fail(`${c.name}: registry ≠ components/ui`);}
console.log("\nAudit: public/r/*.json exists");
for(const c of manifest.components){if(!fs.existsSync(path.join("public/r",c.name+".json")))fail(`${c.name}: public/r missing`);}
if(errors>0){console.log("\n❌ "+errors+" error(s)");process.exit(1);}
console.log("\n✅ Registry audit passed");
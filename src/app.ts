import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

(async() => {
    await main();    
    
})();

async function main() {

    const { b:base, l:limit, n:fileName, d:fileDestination, s:showTable } = yarg;

    ServerApp.run({ base, limit, fileName, fileDestination, showTable });
}
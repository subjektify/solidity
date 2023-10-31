import { BuildContext, IPlugin } from 'subjektify';

export class BuildPlugin implements IPlugin {

    target(): string {
        return "build";
    }
    
    run(context: BuildContext): Promise<void> {
        console.log("[SOLIDITY] BuildPlugin.run");
        return Promise.resolve();
    }
}

# Subjektify Solidity Plugin

## Overview

The Subjektify Solidity Plugin is an essential tool for accelerating your decentralized application development. This plugin is particularly beneficial for projects that utilize Solidity for smart contract development. It automates the process of converting your Subjekt definitions into Solidity smart contracts, thereby bridging the gap between your subject-oriented models and blockchain deployment.

## Features

- **Smart Contract Generation**: Transforms your Subjekt definitions into Solidity smart contracts.
- **Deployment Automation**: Automates the deployment of generated smart contracts to the blockchain.
- **Contract Address Management**: Updates the contract addresses in your project configuration after deployment.

## Installation

Subjektify Solidity Plugin is a native plugin, so all you need is to have Subjektify installed:

```bash
npm install subjektify
```

## Configuration

To configure the plugin, open your `subjektify.json` file and modify it as follows:

```json
{
    "namespace": "your-namespace",
    // ... existing configuration
    "plugins": [
        {
            "name": "solidity"
        }
    ],
    // ... existing configuration
}
```

## Usage

After the plugin is installed and configured, execute the build command to activate its features:

```bash
subjektify build
```

Upon running this command, the plugin will:

1. Convert your Subjekt definitions into Solidity smart contracts and place them in the `.subjektify/contracts` directory.
2. Automate the deployment of these smart contracts to the blockchain.
3. Update the contract addresses in your project configuration based on the latest deployment.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

---

Developed with ❤️ by the Subjektify Team.

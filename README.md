# CSES-Github Extension Commiter

The **CSES-Github Extension** is a browser extension designed to enhance your experience with the **CSES Problem Set** on [CSES](https://cses.fi/problemset/). It integrates directly with GitHub to streamline the process of submitting solutions, checking the correctness of answers, and automatically managing your submissions.

## Features

- **Solution Submission**: Automatically push your CSES solutions to GitHub repositories.
- **Problem Tracker**: Track progress on problems and see which problems you've solved.
- **Automatic Feedback**: Get immediate feedback on your submissions.
- **Problem Difficulty Sorting**: Sort problems based on difficulty and your progress.
- **User-Friendly UI**: Simple and intuitive interface to navigate CSES problems and GitHub integration.

## Installation

### Prerequisites

- A browser that supports extensions (e.g., Chrome, Firefox, or Edge).
- A GitHub account for submitting your solutions.
- CSES account for tracking problem submissions.

### Steps to Install

1. **Clone this repository**:

    ```bash
    git clone https://github.com/your-username/cses-github-extension.git
    ```

2. **Load the extension**:

    Follow the instructions based on your browser:
    - For **Chrome**: 
      - Open Chrome and go to `chrome://extensions/`
      - Enable **Developer mode** (top right)
      - Click **Load unpacked**(top left) and select the extension directory.
    - For **Firefox**: 
      - Open Firefox and go to `about:debugging`
      - Select **This Firefox** and click **Load Temporary Add-on**
      - Choose the `manifest.json` file in the extension directory.

3. **Set up your GitHub integration**:
   - **Generate a GitHub Token**: To allow the extension to authenticate and push solutions to your GitHub account, you need to create a GitHub Personal Access Token. Here's how:
   
     1. Go to [GitHub Developer Settings](https://github.com/settings/tokens).
     2. Click on **Generate new token**.
     3. Choose a **name** for your token (e.g., "CSES GitHub Extension Token").
     4. Select the necessary **scopes**:
        - `repo` (for full control of private repositories)
        - `public_repo` (if you're only using public repositories)
     5. Click **Generate token**.
     6. Copy the token and **keep it secure** (you won't be able to view it again).
     7. Paste the token into the extension's settings(recommended for security) or `.env` file (depending on your implementation).
   
   - Once you've added your GitHub token, authorize the extension to push your solutions to your GitHub repositories.

4. **Start solving problems**:
   - Navigate to the [CSES Problem Set](https://cses.fi/problemset/) and start solving problems.
   - Once a solution is ready, the extension will help you upload it to GitHub.
     
## Usage

- After installing the extension, open any problem on the CSES problem set.
- Once you have written your solution, click the **Submit** button on the extension popup.
- Your solution will be pushed to your GitHub repository.
- Track your progress and see which problems you've solved directly from the extension interface.

## Contributing

If you'd like to contribute to the project, follow these steps:

1. Fork the repository.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and commit them with clear, descriptive messages.
5. Push your changes to your forked repository.
6. Open a pull request to merge your changes into the main repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **CSES** for providing the problem set.
- **GitHub** for seamless integration with code repositories.

## Contact

For any questions or issues, feel free to open an issue on the [GitHub repository](https://github.com/Rizwan102003/cses-github-extension).

---

Happy coding! 🎉


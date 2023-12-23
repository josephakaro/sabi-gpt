import OpenAI from "openai";
import dotenv from "dotenv";
import realineSync from "readline-sync";
import colors from "colors";

dotenv.config();

const openai = new OpenAI({
  apikey: process.env.OPENAI_API_KEY,
});

async function main() {
  console.log(colors.bold.green("Welcome to the GPT-3 Playground!"));
  console.log(
    colors.bold.green("You can type anything you want and GPT-3 will respond.")
  );

  const history = [];

  while (true) {
    const userInput = realineSync.question(colors.bold.yellow("You🧔🏾:"));
    try {
      const messages = history.map(([role, content]) => ({ role, content }));

      // Add the user input to the history
      messages.push({ role: "user", content: userInput });

      // Call the API with the user input
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages,
      });

      // Get completion from the API response
      const completionText = response.choices[0].message.content.replace(
        "\n\t\r",
        ""
      );
      console.log(
        colors.bold.green("Bot🤖:") + colors.bold.white(completionText)
      );

      // Update the history with the completion
      history.push(["user", userInput]);
      history.push(["assistant", completionText]);

      if (userInput === "exit" || userInput === "quit") {
        console.log(
          colors.bold.green("Bot👋🏾:") + colors.bold.yellow(completionText)
        );
        break;
      }
    } catch (error) {
      const errorText = "Something went wrong. Please try again.";
      console.log(colors.bold.green("Bot❗:") + colors.bold.red(errorText));
    }
  }
}

main();

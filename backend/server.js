// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");
const { google } = require("googleapis");
const { authenticate } = require("@google-cloud/local-auth");
const path = require("path");
const gmail = google.gmail("v1");

async function main(
  projectId = "hack-n-roll-374701", // Your Google Cloud Platform project ID
  topicNameOrId = "gmail", // Name for the new topic to create
  subscriptionName = "gmail-sub" // Name for the new subscription to create
) {
  // Instantiates a client
  const pubsub = new PubSub({ projectId });
  const gmail_topic = pubsub.topic(topicNameOrId);
  const subscription = gmail_topic.subscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on("message", async (message) => {
    console.log(message.data);
  });

  // Receive callbacks for errors on the subscription
  subscription.on("error", (error) => {
    console.error("Received error:", error);
  });

  // Send a message to the topic
  // gmail_topic.publish(Buffer.from("Hello, world!"));
}

async function runSample() {
  // Obtain user credentials to use for the request
  const auth = await authenticate({
    keyfilePath: path.join(__dirname, "api_key.json"),
    scopes: [
      "https://mail.google.com/",
      "https://www.googleapis.com/auth/gmail.metadata",
      "https://www.googleapis.com/auth/gmail.modify",
      "https://www.googleapis.com/auth/gmail.readonly",
    ],
  });
  google.options({ auth });

  const res = await gmail.users.watch({
    userId: "me",
    requestBody: {
      // Replace with `projects/${PROJECT_ID}/topics/${TOPIC_NAME}`
      topicName: "projects/hack-n-roll-374701/topics/gmail",
    },
  });
  console.log(res.data);
  return res.data;
}

main();

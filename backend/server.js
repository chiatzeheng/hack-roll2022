// Imports the Google Cloud client library
const { PubSub } = require("@google-cloud/pubsub");
const client = require("./db.js");
const { google } = require("googleapis");

const auth = new google.auth.GoogleAuth({
  // Scopes can be specified either as an array or as a single, space-delimited string.
  scopes: [
    "https://mail.google.com/",
    "https://www.googleapis.com/auth/gmail.readonly",
  ],
});

// Acquire an auth client, and bind it to all future calls

const gmail = google.gmail("v1");

async function main(
  projectId = "hack-n-roll-374701", // Your Google Cloud Platform project ID
  topicNameOrId = "gmail", // Name for the new topic to create
  subscriptionName = "gmail-sub" // Name for the new subscription to create
) {
  const authClient = await auth.getClient();
  google.options({ auth: authClient });
  // Instantiates a client
  const pubsub = new PubSub({ projectId });
  const gmail_topic = pubsub.topic(topicNameOrId);
  const subscription = gmail_topic.subscription(subscriptionName);

  // Receive callbacks for new messages on the subscription
  subscription.on("message", async (message) => {
    try {
      message = JSON.parse(message.data.toString());
      if (!message.hasOwnProperty("emailAddress")) {
        return;
      }
      // let { rows } = await client.query(
      //   "SELECT * FROM public.Users where email = $1",
      //   [email]
      // );
      // console.log(rows);
      // await client.query(
      //   "UPDATE public.Users set history_id = $1 where email = $2",
      //   [history_id, email]
      // );
      gmail.users.history.list({
        // History types to be returned by the function
        historyTypes: ["messageAdded", "labelAdded"],
        labelId: ["INBOX"],
        // Required. Returns history records after the specified `startHistoryId`. The supplied `startHistoryId` should be obtained from the `historyId` of a message, thread, or previous `list` response. History IDs increase chronologically but are not contiguous with random gaps in between valid IDs. Supplying an invalid or out of date `startHistoryId` typically returns an `HTTP 404` error code. A `historyId` is typically valid for at least a week, but in some rare circumstances may be valid for only a few hours. If you receive an `HTTP 404` error response, your application should perform a full sync. If you receive no `nextPageToken` in the response, there are no updates to retrieve and you can store the returned `historyId` for a future request.
        startHistoryId: "797227",
        // The user's email address. The special value `me` can be used to indicate the authenticated user.
        userId: "me",
      });
    } catch (error) {}
  });

  // Receive callbacks for errors on the subscription
  subscription.on("error", (error) => {
    console.error("Received error:", error);
  });

  // Send a message to the topic
  // gmail_topic.publish(Buffer.from("Hello, world!"));
}

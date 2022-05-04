import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaTwitter } from "../target/types/solana_twitter";

describe("solana-twitter", () => {
  // Configure the client to use the local cluster.
    anchor.setProvider(anchor.AnchorProvider.env());

    const program = anchor.workspace.SolanaTwitter as Program<SolanaTwitter>;

    it("can send a new tweet", async () => {
        const tweet = anchor.web3.Keypair.generate();

        await program.rpc.sendTweet("topic","content", {
            accounts: {
               tweet: tweet.publicKey,
               author: program.provider.wallet.publicKey,
               systemProgram: anchor.web3.SystemProgram.programId,
            },
            signers: [
                tweet
            ]
        });


        // Fetch the account details of the created tweet.
        const tweetAccount = await program.account.tweet.fetch(tweet.publicKey);
        console.log(tweetAccount);
    })
});

import { computed } from 'vue'
import { useAnchorWallet } from 'solana-wallets-vue'
import { Connection, PublicKey } from '@solana/web3.js'
import { Program } from '@project-serum/anchor'
import idl from '@/idl/solana_twitter.json'
import { AnchorProvider } from '@project-serum/anchor'

const programID = new PublicKey(idl.metadata.address)
let workspace = null

const preflightCommitment = 'processed'
const commitment = 'processed'

export const useWorkspace = () => workspace

export const initWorkspace = () => {
    const wallet = useAnchorWallet()
    const connection = new Connection('https://api.devnet.solana.com', commitment)
    const provider = computed(() => new AnchorProvider(connection, wallet.value, { preflightCommitment, commitment }))
    const program = computed(() => new Program(idl, programID, provider.value))

    workspace = {
        wallet,
        connection,
        provider,
        program,
    }
}

use anchor_lang::prelude::*;

declare_id!("HqsiivaPH3nR31xzsmht43Y1p2y9Vud7hJ9CUSVGnG3t");

#[program]
pub mod solana_twitter {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

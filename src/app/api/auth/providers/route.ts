export function GET() {
  const discord = process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET;
  const google = process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET;
  const roblox = process.env.ROBLOX_CLIENT_ID && process.env.ROBLOX_CLIENT_SECRET;
  const github = process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET;
  
  return new Response(JSON.stringify({
    providers: {
      discord: !!discord,
      google: !!google,
      roblox: !!roblox,
      github: !!github,
    }
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  });
  
}
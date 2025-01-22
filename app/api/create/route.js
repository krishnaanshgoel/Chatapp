import { StreamChat } from "stream-chat"
import { clerkClient } from '@clerk/nextjs/server'
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;
export async function POST(request) {
    // Initialize a Server Client
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user=await request.json();
    const token=serverClient.createToken(user.data.id);
    const client = await clerkClient()
    await serverClient.upsertUser({id:user.data.id})

    await client.users.updateUserMetadata(user.data.id, {
      publicMetadata: {
        token:token,
      },
    })
    const slugs = ["StockMarket", "WebDev", "Data_Structure_and_Algorithm", "AI", "Blockchain", "FinanceManagement"];

    slugs.forEach(async (item)=>{
        const channel = serverClient.channel('messaging', item, {
            image: 'https://getstream.io/random_png/?name=react',
            name: item+ " Discussion",
            created_by_id:user.data.id
          });
          await channel.create();
          channel.addMembers([user.data.id])
    })

    return Response.json({ message: 'Hello World' })
}
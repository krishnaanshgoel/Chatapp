
import Chatforum from '@/components/Chatforum';
import { currentUser } from '@clerk/nextjs/server'



export default async function Page({ params }) {
    const user = await currentUser();
    const slug = (await params).slug
    const apikey1=process.env.API_KEY
    return <Chatforum slug={slug} clerkUser={{ id:user.id, name:user.firstName, token:user.publicMetadata.token }} apikey1={apikey1}/>
  }
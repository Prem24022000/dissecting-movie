import { blogData } from "@/app/constants";
export async function GET(request) {
  return Response.json(blogData);
}

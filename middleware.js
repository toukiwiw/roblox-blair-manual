export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const secret = request.headers.get('x-proxy-secret');
  
  if (secret !== process.env.PROXY_SECRET) {
    return new Response('Not Found', { status: 404 });
  }
}

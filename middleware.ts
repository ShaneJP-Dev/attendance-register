import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware"

export default withAuth({
    loginPage: "/api/auth/login",
    isReturnToCurrenmtPage: true,
});

export const config = {
    matcher: ['/admin', '/']
}
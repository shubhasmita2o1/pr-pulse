import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { Outlet,Link,createRootRouteWithContext,useRouter,HeadContent,Scripts } from '@tanstack/react-router'
import { useEffect,type ReactNode } from 'react'
import { Toaster } from 'sonner'
import appCss from '../styles.css?url'
import { reportLovableError } from '../lib/lovable-error-reporting'
import { AppShell } from '@/components/AppShell'
export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({head:()=>({meta:[{charSet:'utf-8'},{name:'viewport',content:'width=device-width, initial-scale=1'},{name:'theme-color',content:'#FAF7F2'}],links:[{rel:'stylesheet',href:appCss},{rel:'preconnect',href:'https://fonts.googleapis.com'},{rel:'preconnect',href:'https://fonts.gstatic.com',crossOrigin:'anonymous'},{rel:'stylesheet',href:'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'},{rel:'icon',href:'/favicon.ico'}]}),shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFound,errorComponent:ErrorPage})
function RootShell({children}:{children:ReactNode}){return <html lang="en"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><AppShell><Outlet/></AppShell><Toaster richColors position="bottom-right"/></QueryClientProvider>}
function NotFound(){return <div className="grid min-h-[70vh] place-items-center text-center"><div><p className="text-7xl font-extrabold text-primary">404</p><h1 className="mt-3 text-xl font-bold">Page not found</h1><Link to="/" className="mt-5 inline-block text-sm font-bold text-primary">Return to dashboard</Link></div></div>}
function ErrorPage({error,reset}:{error:Error;reset:()=>void}){const router=useRouter();useEffect(()=>reportLovableError(error,{boundary:'root'}),[error]);return <div className="grid min-h-[70vh] place-items-center text-center"><div><h1 className="text-xl font-bold">This page didn’t load</h1><button className="mt-4 text-sm font-bold text-primary" onClick={()=>{router.invalidate();reset()}}>Try again</button></div></div>}

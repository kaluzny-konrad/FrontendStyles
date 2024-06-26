import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {}

export default function page({}: Props) {
    return (
        <div className="w-full lg:grid lg:min-h-[500px] lg:grid-cols-2 xl:min-h-[700px]">
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Zaloguj się</h1>
                <p className="text-balance text-muted-foreground">
                  Podaj swój email aby się zalogować
                </p>
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="inline-block ml-auto text-sm underline"
                    >
                      Zapomniałeś hasła?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Zaloguj
                </Button>
                <Button variant="outline" className="w-full">
                  Zaloguj z Google
                </Button>
              </div>
              <div className="mt-4 text-sm text-center">
                Nie masz jeszcze konta?{" "}
                <Link href="#" className="underline">
                  Zarejestruj się
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden bg-muted lg:block">
            <Image
              src="/ceneo/ceneo-img.png"
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </div>
      )
}
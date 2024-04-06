"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../../ui/button";

export function Cookies() {
  const [acceptCookies, setAcceptCookies] = useState<boolean | undefined>(
    undefined,
  );
  const [cookiesSettings, setCookiesSettings] = useState({
    preferences: true,
    statistics: true,
    marketing: true,
  });

  return (
    <section
      id="cookies"
      className="flex min-h-[70vh] w-full items-start justify-center space-x-32"
    >
      <div className="relative flex h-full min-h-96 w-full items-center justify-center overflow-hidden rounded-lg border">
        <div className="absolute bottom-5 left-5">
          <div
            className={`flex flex-col space-y-2 rounded-lg border p-3 transition duration-500 ${acceptCookies !== undefined ? "pointer-events-none translate-y-24 opacity-0" : "pointer-events-auto translate-y-0 opacity-100"}`}
          >
            <div className="flex flex-col">
              <h2 className="text-sm font-bold">Aceitar cookies</h2>
              <p className="text-sm text-muted-foreground">
                Permita-nos melhorar nossos sistemas!
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size={"icon"}
                    className="group h-8 w-8 rounded-full"
                    variant={"ghost"}
                  >
                    <Settings className="size-5 transition duration-700 group-hocus:rotate-180" />
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Personalizar cookies</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={cookiesSettings.preferences}
                        onCheckedChange={(value) =>
                          setCookiesSettings({
                            ...cookiesSettings,
                            preferences: value,
                          })
                        }
                        id="preferences"
                      />
                      <Label htmlFor="preferences">Preferências</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={cookiesSettings.statistics}
                        onCheckedChange={(value) =>
                          setCookiesSettings({
                            ...cookiesSettings,
                            statistics: value,
                          })
                        }
                        id="statistics"
                      />
                      <Label htmlFor="statistics">Estatísticas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={cookiesSettings.marketing}
                        onCheckedChange={(value) =>
                          setCookiesSettings({
                            ...cookiesSettings,
                            marketing: value,
                          })
                        }
                        id="marketing"
                      />
                      <Label htmlFor="marketing">Marketing</Label>
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button>Voltar</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              <Button
                onClick={() => {
                  setAcceptCookies(false);
                  toast.success("Cookies negados");
                }}
                variant={"secondary"}
                size={"sm"}
                className="h-7"
              >
                Negar
              </Button>
              <Button
                onClick={() => {
                  setAcceptCookies(true);
                  toast.success(
                    <div className="flex flex-col">
                      <span>Cookies aceitos:</span>
                      <span>
                        Preferências:{" "}
                        <b>
                          {cookiesSettings.preferences
                            ? "ativado"
                            : "desativado"}
                        </b>
                      </span>
                      <span>
                        Estatísticas:{" "}
                        <b>
                          {cookiesSettings.statistics
                            ? "ativado"
                            : "desativado"}
                        </b>
                      </span>
                      <span>
                        Marketing:{" "}
                        <b>
                          {cookiesSettings.marketing ? "ativado" : "desativado"}
                        </b>
                      </span>
                    </div>,
                  );
                }}
                size={"sm"}
                className="h-7"
              >
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 space-y-4">
        <div className="space-y-6">
          <h2>Cookies</h2>
          <p className="text-foreground-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae hic,
            deleniti dignissimos doloremque aut natus nulla perspiciatis
            perferendis cum dolorem?
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md bg-accent p-1.5 px-2 text-xs">react</span>
          <span className="rounded-md bg-accent p-1.5 px-2 text-xs">
            tailwindcss
          </span>
        </div>
      </div>
    </section>
  );
}

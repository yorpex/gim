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
    <>
      <Button
        variant={"secondary"}
        tabIndex={acceptCookies !== undefined ? 0 : -1}
        className={`absolute right-5 top-5 transition ${acceptCookies !== undefined ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        size={"sm"}
        onClick={() => {
          setAcceptCookies(undefined);
          setCookiesSettings({
            marketing: true,
            preferences: true,
            statistics: true,
          });
        }}
      >
        Resetar
      </Button>
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
                  tabIndex={acceptCookies === undefined ? 0 : -1}
                >
                  <Settings className="size-5 transition duration-700 group-hover:rotate-180 group-focus:rotate-180" />
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
              tabIndex={acceptCookies === undefined ? 0 : -1}
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
                        {cookiesSettings.preferences ? "ativado" : "desativado"}
                      </b>
                    </span>
                    <span>
                      Estatísticas:{" "}
                      <b>
                        {cookiesSettings.statistics ? "ativado" : "desativado"}
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
              tabIndex={acceptCookies === undefined ? 0 : -1}
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

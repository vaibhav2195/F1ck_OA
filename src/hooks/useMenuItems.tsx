import {
  Settings,
  Code,
  MessagesSquare,
  AudioLinesIcon,
  SquareSlashIcon,
  MonitorIcon,
  PowerIcon,
  MailIcon,
  GlobeIcon,
  BugIcon,
  MessageSquareTextIcon,
} from "lucide-react";
import { invoke } from "@tauri-apps/api/core";
import { useApp } from "@/contexts";
import { GithubIcon } from "@/components";

export const useMenuItems = () => {
  const { hasActiveLicense } = useApp();

  const menu: {
    icon: React.ElementType;
    label: string;
    href: string;
    count?: number;
  }[] = [

      {
        icon: MessagesSquare,
        label: "Chats",
        href: "/chats",
      },

      {
        icon: Settings,
        label: "App Settings",
        href: "/settings",
      },
      {
        icon: MessageSquareTextIcon,
        label: "Responses",
        href: "/responses",
      },
      {
        icon: MonitorIcon,
        label: "Screenshot",
        href: "/screenshot",
      },
      {
        icon: AudioLinesIcon,
        label: "Audio",
        href: "/audio",
      },
      {
        icon: SquareSlashIcon,
        label: "Cursor & Shortcuts",
        href: "/shortcuts",
      },

      {
        icon: Code,
        label: "Dev space",
        href: "/dev-space",
      },
    ];

  const footerItems = [
    ...(hasActiveLicense
      ? [
        {
          icon: MailIcon,
          label: "Contact Support",
          href: "mailto:support@f1ck_OA.com",
        },
      ]
      : []),
    {
      icon: BugIcon,
      label: "Report a bug",
      href: "https://github.com/vaibhav2195/f1ck_OA/issues/new?template=bug-report.yml",
    },
    {
      icon: PowerIcon,
      label: "Quit f1ck_OA",
      action: async () => {
        await invoke("exit_app");
      },
    },
  ];

  const footerLinks: {
    title: string;
    icon: React.ElementType;
    link: string;
  }[] = [
      {
        title: "Website",
        icon: GlobeIcon,
        link: "https://github.com/vaibhav2195/f1ck_OA",
      },
      {
        title: "Github",
        icon: GithubIcon,
        link: "https://github.com/vaibhav2195/f1ck_OA",
      },

    ];

  return {
    menu,
    footerItems,
    footerLinks,
  };
};

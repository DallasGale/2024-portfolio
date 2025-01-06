// images
import KayoLogo from "../../images/logos/Kayo.png";
import PeningtonMobile from "../../images/projects/thinkerbell/penington/penn-mb1.png";
import PeningtonLogo from "../../images/logos/penington.svg";

import ThinkebellLogo from "../../images/logos/thinkerbell.png";
import OpenUniLogo from "../../images/logos/oua.png";
import CCMLogo from "../../images/logos/ccm.svg";
import YarraValleyLogo from "../../images/logos/yvwlogo.png";
import GigabuddyLogo from "../../images/logos/gigabuddy.png";
import AbcLogo from "../../images/logos/abc.png";

// KayoSports
import KayoDesktop from "../../images/projects/thinkerbell/kayo/desktop.png";
import KayoSportsMb1 from "../../images/projects/thinkerbell/kayo/kayo-mb1.png";
import KayoSportsMb2 from "../../images/projects/thinkerbell/kayo/kayo-mb2.png";

// Penington
import PeningtonDesktop from "../../images/projects/thinkerbell/penington/desktop.png";
import PeningtonMb1 from "../../images/projects/thinkerbell/penington/penn-mb1.png";
import PeningtonMb2 from "../../images/projects/thinkerbell/penington/penn-mb2.png";

// OUA
import OuaDesktop from "../../images/projects/thinkerbell/oua/desktop.png";
import OuaMb1 from "../../images/projects/thinkerbell/oua/mb-1.png";
import OuaMb2 from "../../images/projects/thinkerbell/oua/mb-2.png";

// Caravan Cleaning Melbourne
import CcmDesktop from "../../images/projects/freelance/ccm/desktop.png";
import CcmMb1 from "../../images/projects/freelance/ccm/mb-1.png";
import CcmMb2 from "../../images/projects/freelance/ccm/mb-2.png";

// Yarra Valley Water
import YvwDesktop from "../../images/projects/hardhat/yvw/desktop.png";
import YvwMb1 from "../../images/projects/hardhat/yvw/mb-1.png";
import YvwMb2 from "../../images/projects/hardhat/yvw/mb-2.png";

// Data Beast
import DbDesktop from "../../images/projects/gigabuddy/databeast/desktop.png";
import DbMb1 from "../../images/projects/gigabuddy/databeast/mb-1.png";
import DbMb2 from "../../images/projects/gigabuddy/databeast/mb-2.png";
// ABC
import AbcDesktop from "../../images/projects/abc/desktop.png";
import AbcMb1 from "../../images/projects/abc/mb-1.png";
import AbcMb2 from "../../images/projects/abc/mb-2.png";

export type ProjectTypes = {
  id: number;
  project: string;
  contracted: boolean;
  agency: string | null;
  client?: string;
  hashtags: string[];
  logo: string;
  agencyLogo: string | null;
  images: {
    mobile: string[];
    desktop: string;
  };
  videos?: {
    vimeoId: number;
    title: string;
  }[];
  description: string;
};
export const data: ProjectTypes[] = [
  {
    id: 1,
    project: "The Kayo Callup!",
    contracted: true,
    agency: "Thinkerbell",
    client: "Kayo Sports",
    logo: KayoLogo.src,
    agencyLogo: ThinkebellLogo.src,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [KayoSportsMb1.src, KayoSportsMb2.src],
      desktop: KayoDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040940197,
        title: "Kayo Callup!",
      },
      {
        vimeoId: 1040946036,
        title: "Kayo Callup!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 2,
    project: "Regulate It!",
    contracted: true,
    agency: "Thinkerbell",
    client: "Penington Institute",
    logo: PeningtonLogo.src,
    agencyLogo: ThinkebellLogo.src,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [PeningtonMb1.src, PeningtonMb2.src],
      desktop: PeningtonDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 3,
    project: "Open Universities Australia",
    contracted: true,
    agency: "Thinkerbell",
    client: "Open Universities Australia",
    logo: OpenUniLogo.src,
    agencyLogo: ThinkebellLogo.src,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [OuaMb1.src, OuaMb2.src],
      desktop: OuaDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 4,
    project: "Website re-design & re-build",
    contracted: true,
    agency: null,
    client: "Caravan Cleaning Melbourne",
    logo: CCMLogo.src,
    agencyLogo: null,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [CcmMb1.src, CcmMb2.src],
      desktop: CcmDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 5,
    project: "Choose Tap",
    contracted: false,
    agency: "Hardhat",
    client: "Yarra Valley Water",
    logo: YarraValleyLogo.src,
    agencyLogo: null,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [YvwMb1.src, YvwMb2.src],
      desktop: YvwDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 6,
    project: "Databeast",
    contracted: false,
    agency: null,
    client: "Gigabuddy",
    logo: GigabuddyLogo.src,
    agencyLogo: null,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [DbMb1.src, DbMb2.src],
      desktop: DbDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
  {
    id: 7,
    project: "2022 Election UI",
    contracted: false,
    agency: null,
    client: "ABC",
    logo: AbcLogo.src,
    agencyLogo: null,
    hashtags: ["Development", "React", "Firebase", "Astro"],
    images: {
      mobile: [AbcMb1.src, AbcMb2.src],
      desktop: AbcDesktop.src,
    },
    videos: [
      {
        vimeoId: 1040996087,
        title: "Regulate It!",
      },
    ],

    description:
      "As the lead developer for advertising agency <strong>Thinkerbell</strong>, I spearheaded the <strong>full-stack development</strong> of <strong>Kayo Sports Call Up!</strong>, a platform enabling amateur commentators to submit entries for AFL commentary opportunities. <br /><br />Using <strong>Astro, React</strong>, and <strong>Google Firebase</strong>, I architected and delivered a high-performance solution within a two-week timeline. The platform featured an engaging UI/UX with <strong>animations</strong>, <strong>audio integration</strong>, and <strong>interactive celebration effects</strong>. <br /><br />I implemented Firebase Cloud Functions to efficiently process competition entries in batches and enable CSV export functionality.",
  },
];

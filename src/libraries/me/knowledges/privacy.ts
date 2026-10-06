import FamilyGamesImage from "../../../images/projects/familygames.png";
import GuitarTunerImage from "../../../images/projects/guitartuner.png";
import HabitTrackerImage from "../../../images/projects/habittracker.png";
import HangmanImage from "../../../images/projects/hangman.png";
import WalletImage from "../../../images/projects/wallet.png";
import MyProjects, { type Project } from "./projects";

/** Where a kind of data ends up. */
export type DataStatus = "no" | "device" | "cloud" | "shared";

export interface DataItem {
  icon: string;
  label: string;
  desc?: string;
  status: DataStatus;
}

export interface PolicySection {
  title: string;
  paragraphs: string[];
}

export interface AppPrivacy {
  /** URL segment: `/<slug>/privacy`. */
  slug: string;
  project: Project;
  tagline: string;
  effectiveDate: string;
  data: DataItem[];
  sections: PolicySection[];
}

const effectiveDate = "October 5, 2026";

const project = (name: string) => MyProjects.find((p) => p.name === name)!;

const github = (repo: string) => `https://github.com/danny270793/${repo}`;

const noPersonalData: DataItem = {
  icon: "fas fa-user",
  label: "Personal data",
  desc: "Name, email, phone",
  status: "no",
};

const noLocation: DataItem = {
  icon: "fas fa-map-marker-alt",
  label: "Location",
  status: "no",
};

const noAnalytics: DataItem = {
  icon: "fas fa-chart-line",
  label: "Analytics & ads",
  desc: "No tracking SDKs",
  status: "no",
};

const preferencesOnDevice = (list: string): DataItem => ({
  icon: "fas fa-sliders-h",
  label: "Preferences",
  desc: list,
  status: "device",
});

const biometrics: PolicySection = {
  title: "Biometric unlock",
  paragraphs: [
    "You can optionally lock the app with Face ID, Touch ID or your fingerprint. Your operating system checks your biometrics; the app never sees or stores them and only remembers whether the lock is turned on.",
  ],
};

const thirdParty = (extra: string[] = []): PolicySection => ({
  title: "Third-party services",
  paragraphs: [
    ...extra,
    "The About section of the settings page loads the developer's profile photo from GitHub, and links such as Rate on Google Play open in your browser or store app. Those services may log your request (for example your IP address) under their own privacy policies.",
    "The app does not include third-party analytics, tracking or advertising software, and we do not sell or share your personal information.",
  ],
});

const accountDeletion = (what: string): PolicySection => ({
  title: "Deleting your data",
  paragraphs: [
    `Signing out removes your session from this device. To delete your account and ${what}, email us from the address you signed up with and we will remove it from Supabase.`,
    "Preferences stored on the device are deleted when you uninstall the app or clear its storage.",
  ],
});

const supabaseSecurity =
  "Supabase handles authentication and stores your data in a database protected by row-level security, so each record can only be read by the account it belongs to. Passwords are hashed by Supabase and never stored by the app.";

const changes: PolicySection = {
  title: "Changes to this policy",
  paragraphs: [
    "This policy may be updated as the app changes. The effective date at the top shows the latest revision, and continuing to use the app after changes means you accept the updated policy.",
  ],
};

const apps: AppPrivacy[] = [
  {
    slug: "boxing-timer",
    project: project("Boxing Timer"),
    tagline:
      "No account and no sign-in. Training modes and preferences stay on this device.",
    effectiveDate,
    data: [
      noPersonalData,
      noLocation,
      noAnalytics,
      {
        icon: "fas fa-stopwatch",
        label: "Training modes",
        desc: "Rounds, round and rest times",
        status: "device",
      },
    ],
    sections: [
      {
        title: "No account needed",
        paragraphs: [
          "Boxing Timer has no accounts and no sign-in. You never enter an email or password, and the app does not collect personal information.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Custom training modes and preferences (theme, language, selected mode and biometric unlock) are stored only on this device. There are no servers and nothing is uploaded or synced. Uninstalling the app deletes this data.",
          "Round and countdown sounds are bundled with the app and played locally; the app does not use the microphone.",
        ],
      },
      biometrics,
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "compass",
    project: project("Mycompass"),
    tagline: "Your heading and location are processed on your device only.",
    effectiveDate,
    data: [
      noPersonalData,
      {
        icon: "fas fa-map-marker-alt",
        label: "Location",
        desc: "Used live, never saved",
        status: "device",
      },
      {
        icon: "fas fa-compass",
        label: "Motion sensors",
        desc: "Magnetometer for heading",
        status: "device",
      },
      noAnalytics,
    ],
    sections: [
      {
        title: "Sensors and location",
        paragraphs: [
          "Compass reads the magnetometer to show your heading. If you allow location access, it also reads your GPS position while the app is open to show coordinates and altitude and to improve heading accuracy.",
          "Everything is processed on your device and is not recorded, uploaded or shared. Location access is optional; the compass works without it.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Only your preferences (language, theme, coordinate format, haptics, keep screen on and biometric unlock) are saved on this device. There are no accounts and no servers.",
        ],
      },
      biometrics,
      thirdParty([
        "When you tap Open in Maps, your current coordinates are sent to Google Maps so it can show the location. Nothing is sent unless you tap it.",
      ]),
      changes,
    ],
  },
  {
    slug: "speedometer",
    project: project("Speedometer"),
    tagline: "Your location stays on your device.",
    effectiveDate,
    data: [
      noPersonalData,
      {
        icon: "fas fa-map-marker-alt",
        label: "Location",
        desc: "Used live, never saved",
        status: "device",
      },
      {
        icon: "fas fa-tachometer-alt",
        label: "Trip stats",
        desc: "Cleared when you close the app",
        status: "device",
      },
      noAnalytics,
    ],
    sections: [
      {
        title: "Location data",
        paragraphs: [
          "Speedometer reads your device's GPS position while the app is open to calculate speed, distance and altitude. Location is processed only on your device and is not recorded, uploaded or shared.",
          "Trip statistics (top speed, average speed and distance) are kept in memory and are gone when you close the app.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Only your preferences (language, theme, units and biometric unlock) are saved on this device. There are no accounts and no servers.",
        ],
      },
      biometrics,
      thirdParty([
        "When you tap Open in Maps, your current coordinates are sent to Google Maps so it can show the location. Nothing is sent unless you tap it.",
      ]),
      changes,
    ],
  },
  {
    slug: "soundmeter",
    project: project("Soundmeter"),
    tagline: "Microphone audio is measured on your device and never recorded.",
    effectiveDate,
    data: [
      noPersonalData,
      {
        icon: "fas fa-microphone",
        label: "Microphone",
        desc: "Measured live, never recorded",
        status: "device",
      },
      noLocation,
      noAnalytics,
    ],
    sections: [
      {
        title: "Microphone",
        paragraphs: [
          "Soundmeter listens to the microphone only while the app is open to compute sound levels in decibels. Audio is processed in memory and is never recorded, saved or sent anywhere.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Only your preferences (language, theme, calibration, keep screen on and biometric unlock) are saved on this device. There are no accounts and no servers.",
        ],
      },
      biometrics,
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "guitar-tuner",
    project: {
      image: GuitarTunerImage,
      name: "Guitar Tuner",
      description: {
        en: "Tune your guitar with the microphone or by ear with reference tones",
        es: "Afina tu guitarra con el micrófono o de oído con tonos de referencia",
      },
      playstore: undefined,
      appstore: undefined,
      github: github("My-Guitar-Tunner"),
    },
    tagline:
      "Audio is analyzed on your device in real time and never recorded.",
    effectiveDate,
    data: [
      noPersonalData,
      {
        icon: "fas fa-microphone",
        label: "Microphone",
        desc: "Auto mode only, never recorded",
        status: "device",
      },
      noLocation,
      noAnalytics,
    ],
    sections: [
      {
        title: "No account needed",
        paragraphs: [
          "Guitar Tuner has no accounts and no sign-in. You never enter an email or password, and the app does not collect personal information.",
        ],
      },
      {
        title: "Microphone",
        paragraphs: [
          "Auto mode uses the microphone only while its screen is open, to detect the pitch of the instrument you are tuning. Audio is analyzed on this device in real time and is never recorded, saved or transmitted. The microphone is released when you leave the screen or the app goes to the background.",
          "Manual mode plays reference tones generated on the device and does not use the microphone.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Preferences (theme, language and biometric unlock) are stored only on this device and are deleted when you uninstall the app.",
        ],
      },
      biometrics,
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "mmascorecard",
    project: project("MMA ScoreCard"),
    tagline: "No account, no sign-in. Everything stays on this device.",
    effectiveDate,
    data: [
      noPersonalData,
      noLocation,
      noAnalytics,
      {
        icon: "fas fa-database",
        label: "Event cache",
        desc: "Public event listings",
        status: "device",
      },
    ],
    sections: [
      {
        title: "No account",
        paragraphs: [
          "You use MMA ScoreCard without an account. The app does not ask for your name, email or password, and does not send personal data to any server we operate.",
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "Public event listings (events, fight cards, results and fighter records) are fetched from a third-party source over HTTPS and cached only on this device so the app does not download them every time. Theme, language and the biometric unlock setting also stay on the device.",
          "You can clear the event cache by clearing the app's storage.",
        ],
      },
      biometrics,
      thirdParty([
        "Because event data is requested directly from that public source, your device's network request (for example your IP address) is visible to it under its own privacy practices, which this app does not control. The app is not affiliated with the UFC or any promotion it lists.",
      ]),
      changes,
    ],
  },
  {
    slug: "habit-tracker",
    project: {
      image: HabitTrackerImage,
      name: "Habit Tracker",
      description: {
        en: "Track daily habits with streaks, heatmaps and optional cloud sync",
        es: "Registra hábitos diarios con rachas, mapas de calor y sincronización opcional",
      },
      playstore: undefined,
      appstore: undefined,
      github: github("Time-Tracker"),
    },
    tagline:
      "Use it as a guest on this device, or sign in to sync with Supabase.",
    effectiveDate,
    data: [
      {
        icon: "fas fa-envelope",
        label: "Email",
        desc: "Only if you sign in",
        status: "cloud",
      },
      {
        icon: "fas fa-calendar-check",
        label: "Habits",
        desc: "Device as guest, Supabase when signed in",
        status: "cloud",
      },
      noLocation,
      noAnalytics,
    ],
    sections: [
      {
        title: "Account (optional)",
        paragraphs: [
          "You can use the app as a guest without an account. If you sign in, authentication is provided by Supabase using your email and password.",
          supabaseSecurity,
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "As a guest, your habits (name, color, icon, check-in days and archive date) stay on this device. When you sign in, they are stored in Supabase and tied to your account; habits created as a guest are merged into your account the first time you sign in and then removed from local storage.",
          "Preferences (language, theme and biometric unlock) stay on the device.",
        ],
      },
      {
        title: "Backups",
        paragraphs: [
          "Export creates a JSON file with your habits and hands it to the share sheet, so it goes only where you choose to save or send it. Import reads a file you pick and never uploads it anywhere else.",
        ],
      },
      biometrics,
      accountDeletion("the habits synced with it"),
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "hangman",
    project: {
      image: HangmanImage,
      name: "Hangman",
      description: {
        en: "Guess words across difficulty levels and climb the leaderboard",
        es: "Adivina palabras en distintos niveles de dificultad y sube en la clasificación",
      },
      playstore: undefined,
      appstore: undefined,
      github: github("Hangman"),
    },
    tagline: "Your account and game records are stored with Supabase.",
    effectiveDate,
    data: [
      {
        icon: "fas fa-envelope",
        label: "Email & password",
        desc: "For your account",
        status: "cloud",
      },
      {
        icon: "fas fa-trophy",
        label: "Username & scores",
        desc: "Shown on leaderboards",
        status: "shared",
      },
      {
        icon: "fas fa-camera",
        label: "Profile photo",
        desc: "Never uploaded",
        status: "device",
      },
      noAnalytics,
    ],
    sections: [
      {
        title: "Your account",
        paragraphs: [
          "Playing requires an account. When you register you provide an email address, a username and a password, which are handled by Supabase Auth.",
          supabaseSecurity,
        ],
      },
      {
        title: "Game records",
        paragraphs: [
          "Each finished game stores your points, the words played, the difficulty, whether timed mode was on and the time played, linked to your account in Supabase.",
          "Your username and scores are visible to other players on the leaderboards. Your email is not shown to other players.",
        ],
      },
      {
        title: "Camera and photos",
        paragraphs: [
          "If you choose a profile photo, the app asks for camera or photo library access. The photo is saved only on this device and is never uploaded.",
        ],
      },
      {
        title: "What stays on this device",
        paragraphs: [
          "Preferences (language, theme, difficulty, timed mode and biometric unlock) and your profile photo are stored only on the device.",
        ],
      },
      biometrics,
      accountDeletion("your game records"),
      {
        title: "Children's privacy",
        paragraphs: [
          "The game is suitable for all ages, but we do not knowingly collect personal information from children under 13 without parental consent. If you believe a child has created an account, contact us and we will delete it.",
        ],
      },
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "wallet",
    project: {
      image: WalletImage,
      name: "Wallet",
      description: {
        en: "Track accounts, cards, transactions and monthly spending",
        es: "Controla cuentas, tarjetas, transacciones y gastos mensuales",
      },
      playstore: undefined,
      appstore: undefined,
      github: github("Wallet"),
    },
    tagline:
      "Your financial records are stored with Supabase and tied to your account.",
    effectiveDate,
    data: [
      {
        icon: "fas fa-envelope",
        label: "Email & password",
        desc: "For your account",
        status: "cloud",
      },
      {
        icon: "fas fa-wallet",
        label: "Financial records",
        desc: "Accounts, cards, transactions",
        status: "cloud",
      },
      noLocation,
      noAnalytics,
    ],
    sections: [
      {
        title: "Your account",
        paragraphs: [
          "Wallet requires you to sign in with your email and password. Authentication is provided by Supabase.",
          supabaseSecurity,
        ],
      },
      {
        title: "What we store",
        paragraphs: [
          "The records you enter (accounts, cards, transactions, transfers, credits, assets, categories and tags) are stored in Supabase and tied to your account. Wallet never connects to your bank; it only stores what you type in.",
          "To keep working without a connection, the app caches your records on this device. The cache is deleted when you sign out. Preferences (language, theme and biometric unlock) stay on the device.",
        ],
      },
      biometrics,
      accountDeletion("all the financial records stored with it"),
      thirdParty(),
      changes,
    ],
  },
  {
    slug: "family-games",
    project: {
      image: FamilyGamesImage,
      name: "Family Games",
      description: {
        en: "Track family board game matches, scores and standings",
        es: "Registra partidas de juegos de mesa en familia, puntajes y posiciones",
      },
      playstore: undefined,
      appstore: undefined,
      github: github("Family-Games"),
    },
    tagline:
      "Games and scores are stored with Supabase and shared with their players.",
    effectiveDate,
    data: [
      {
        icon: "fas fa-envelope",
        label: "Email & password",
        desc: "For your account",
        status: "cloud",
      },
      {
        icon: "fas fa-dice",
        label: "Games & scores",
        desc: "Visible to the game's players",
        status: "shared",
      },
      noLocation,
      noAnalytics,
    ],
    sections: [
      {
        title: "Your account",
        paragraphs: [
          "Family Games requires you to sign in with your email and password. Authentication is provided by Supabase.",
          supabaseSecurity,
        ],
      },
      {
        title: "Games and players",
        paragraphs: [
          "Games you create, their matches and scores are stored in Supabase. To invite someone, you enter their email address; everyone who is a member of a game can see its matches, scores and the email addresses of the other members.",
          "Preferences (language, theme and biometric unlock) stay on this device.",
        ],
      },
      biometrics,
      accountDeletion("the games you created"),
      thirdParty([
        "The app's fonts are downloaded from Google Fonts the first time they are needed, so Google receives that request.",
      ]),
      changes,
    ],
  },
];

export default apps;

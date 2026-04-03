export interface Character {
  id: string;
  name: string;
  role: string;
  species: string;
  description: string;
  relationship: string;
  trait: string;
  image: string;
  isMainCharacter: boolean;
}

export const characters: Character[] = [
  {
    id: "trey",
    name: "Trey",
    role: "The Heart of the Story",
    species: "Octopus",
    description:
      "A tiny octopus with three hearts and an ocean of courage. After losing his parents, Trey discovers that love doesn't end — it finds new ways to hold you. Curious, gentle, and braver than he knows, Trey's journey is one of hope, healing, and learning that family is built through love.",
    relationship: "Main character",
    trait: "Three hearts — one for remembering, one for feeling, one for growing",
    image: "/images/characters/trey.png",
    isMainCharacter: true,
  },
  {
    id: "raya",
    name: "Raya",
    role: "The First Safe Harbor",
    species: "Stingray",
    description:
      "A kind and graceful stingray who is the first to find Trey when he is lost and afraid. With gentle patience and a calm presence, Raya helps Trey feel safe enough to breathe again. She shows him that comfort can come from unexpected places.",
    relationship: "The caring friend who first helps Trey feel safe",
    trait: "A calming glow that makes the water feel warmer",
    image: "/images/characters/raya.png",
    isMainCharacter: false,
  },
  {
    id: "ray",
    name: "Ray",
    role: "A Steady Light",
    species: "Manta Ray",
    description:
      "A welcoming and steady presence in Trey's new world. Ray offers protection, patience, and a quiet strength that helps Trey understand what it means to be cared for by someone who chooses to stay. He is the father figure Trey never expected to find.",
    relationship: "A welcoming father figure in Trey's new family",
    trait: "A deep, steady warmth that makes everyone feel they belong",
    image: "/images/characters/ray.png",
    isMainCharacter: false,
  },
  {
    id: "cray",
    name: "Cray",
    role: "A Different Kind of Brilliant",
    species: "Crayfish",
    description:
      "A vibrant and curious child who experiences the world in their own beautiful way. Cray sees patterns others miss and feels things deeply. Through their friendship with Trey, Cray shows that there is no single way to be part of a family — every voice matters.",
    relationship: "A sibling figure who experiences the world differently",
    trait: "Sees the world in colors and patterns that others can't",
    image: "/images/characters/cray.png",
    isMainCharacter: false,
  },
  {
    id: "marina",
    name: "Marina",
    role: "The Guide Between Worlds",
    species: "Seahorse",
    description:
      "A caring and compassionate seahorse social worker who helps children find where they belong. Marina moves through the ocean with purpose and kindness, connecting those who need love with those who have love to give. She is the bridge between Trey's old life and his new one.",
    relationship: "A supportive social worker who helps Trey find his new family",
    trait: "Carries a small shell that holds the stories of every child she's helped",
    image: "/images/characters/marina.png",
    isMainCharacter: false,
  },
];

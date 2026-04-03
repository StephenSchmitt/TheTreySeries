import Image from "next/image";
import type { Character } from "@/data/characters";

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div
      className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        character.isMainCharacter
          ? "glass-card glow-teal col-span-full lg:col-span-2"
          : "glass-card glow-ocean"
      }`}
    >
      {character.isMainCharacter ? (
        /* Featured main character layout */
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative bg-gradient-to-br from-teal-100 via-aqua-50 to-ocean-100 flex items-center justify-center p-8 md:p-12 min-h-[400px] md:min-h-[500px]">
            <div className="relative w-full max-w-[320px] aspect-[3/4]">
              {/* Replace with your character image */}
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 80vw, 320px"
                priority
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <span className="px-4 py-1.5 bg-gradient-to-r from-teal-500 to-aqua-500 text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                Main Character
              </span>
            </div>
          </div>
          <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 mb-1">
              {character.species}
            </span>
            <h3
              className="text-3xl md:text-4xl font-bold text-ocean-800"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {character.name}
            </h3>
            <p className="mt-1 text-lg font-medium text-teal-600">{character.role}</p>
            <p className="mt-4 text-ocean-600 leading-relaxed">{character.description}</p>
            <div className="mt-6 p-4 rounded-2xl bg-teal-50/80 border border-teal-200/40">
              <p className="text-sm font-medium text-teal-700">
                <span className="text-teal-500 mr-2">&#10047;</span>
                {character.trait}
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Supporting character card */
        <div className="flex flex-col h-full">
          <div className="relative bg-gradient-to-br from-ocean-50 via-aqua-50 to-teal-50 flex items-center justify-center p-6 md:p-8 min-h-[300px] md:min-h-[360px]">
            <div className="relative w-full max-w-[240px] aspect-[3/4]">
              {/* Replace with your character image */}
              <Image
                src={character.image}
                alt={character.name}
                fill
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 240px"
              />
            </div>
          </div>
          <div className="p-6 md:p-7 flex flex-col flex-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-aqua-600">
              {character.species}
            </span>
            <h3
              className="text-2xl font-bold text-ocean-800 mt-1"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {character.name}
            </h3>
            <p className="text-sm font-medium text-teal-600 mt-0.5">{character.role}</p>
            <p className="mt-3 text-sm text-ocean-600 leading-relaxed flex-1">
              {character.description}
            </p>
            <div className="mt-4 p-3 rounded-xl bg-ocean-50/60 border border-ocean-200/30">
              <p className="text-xs font-medium text-ocean-700">
                <span className="text-teal-500 mr-1.5">&#10047;</span>
                {character.trait}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

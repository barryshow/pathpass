import { CountryData, PathwayCategory, pathwayCategoryOrder } from "@/lib/types";

import { andorra } from "./andorra";
import { australia } from "./australia";
import { austria } from "./austria";
import { belgium } from "./belgium";
import { canada } from "./canada";
import { croatia } from "./croatia";
import { cyprus } from "./cyprus";
import { czechia } from "./czechia";
import { denmark } from "./denmark";
import { estonia } from "./estonia";
import { finland } from "./finland";
import { france } from "./france";
import { germany } from "./germany";
import { greece } from "./greece";
import { hongKong } from "./hong-kong";
import { iceland } from "./iceland";
import { ireland } from "./ireland";
import { israel } from "./israel";
import { italy } from "./italy";
import { japan } from "./japan";
import { latvia } from "./latvia";
import { lithuania } from "./lithuania";
import { luxembourg } from "./luxembourg";
import { macao } from "./macao";
import { malta } from "./malta";
import { netherlands } from "./netherlands";
import { newZealand } from "./new-zealand";
import { norway } from "./norway";
import { portugal } from "./portugal";
import { puertoRico } from "./puerto-rico";
import { sanMarino } from "./san-marino";
import { singapore } from "./singapore";
import { slovakia } from "./slovakia";
import { slovenia } from "./slovenia";
import { southKorea } from "./south-korea";
import { spain } from "./spain";
import { sweden } from "./sweden";
import { switzerland } from "./switzerland";
import { taiwan } from "./taiwan";
import { unitedKingdom } from "./united-kingdom";
import { unitedStates } from "./united-states";

export const countries: CountryData[] = [
  andorra,
  australia,
  austria,
  belgium,
  canada,
  croatia,
  cyprus,
  czechia,
  denmark,
  estonia,
  finland,
  france,
  germany,
  greece,
  hongKong,
  iceland,
  ireland,
  israel,
  italy,
  japan,
  latvia,
  lithuania,
  luxembourg,
  macao,
  malta,
  netherlands,
  newZealand,
  norway,
  portugal,
  puertoRico,
  sanMarino,
  singapore,
  slovakia,
  slovenia,
  southKorea,
  spain,
  sweden,
  switzerland,
  taiwan,
  unitedKingdom,
  unitedStates,
];

export const regions = Array.from(new Set(countries.map((c) => c.region)));

export const pathwayTypes: PathwayCategory[] = pathwayCategoryOrder;

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countries.find((c) => c.slug === slug);
}
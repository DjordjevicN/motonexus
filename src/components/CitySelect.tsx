import { Select } from "@radix-ui/react-select";
import { City } from "country-state-city";
import { Label } from "./ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { memo, useMemo } from "react";

type Props = {
  countryCode: string;
  value?: string;
  onSelect: (cityKey: string) => void;
  disabled?: boolean;
  hideLabel?: boolean;
};

const CitySelect = ({
  countryCode,
  value,
  onSelect,
  disabled = false,
  hideLabel = false,
}: Props) => {
  const items = useMemo(() => {
    const cities = countryCode
      ? City.getCitiesOfCountry(countryCode) ?? []
      : [];
    return [{ name: "All Cities", stateCode: "", countryCode }, ...cities];
  }, [countryCode]);

  return (
    <div className="w-full relative z-50">
      {!hideLabel && <Label htmlFor="city">City</Label>}
      <Select
        disabled={disabled}
        value={value}
        onValueChange={(val) => onSelect(val)}
      >
        <SelectTrigger id="city" className="w-full">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto">
          {items.map((c) => {
            const key = `${c.name}|${c.stateCode ?? ""}|${c.countryCode}`;
            return (
              <SelectItem key={key} value={c.name}>
                {c.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default memo(CitySelect);

import { Select } from "@radix-ui/react-select";
import { Country } from "country-state-city";
import { Label } from "./ui/label";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { memo } from "react";

const CountrySelect = ({
  value,
  onSelect,
  disabled = false,
  hideLabel = false,
}: {
  onSelect: (countryCode: string) => void;
  value?: string;
  disabled?: boolean;
  hideLabel?: boolean;
}) => {
  const countries = Country.getAllCountries();
  return (
    <div className="w-full relative z-50">
      {!hideLabel && <Label htmlFor="country">Country</Label>}
      <Select
        disabled={disabled}
        value={value}
        onValueChange={(val) => {
          onSelect(val);
        }}
      >
        <SelectTrigger id="country" className="w-full!">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent className="max-h-60 overflow-y-auto">
          {countries.map((c) => {
            return (
              <SelectItem key={c.isoCode} value={c.isoCode}>
                {c.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};
export default memo(CountrySelect);

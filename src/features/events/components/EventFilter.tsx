import CitySelect from "@/components/CitySelect";
import CountrySelect from "@/components/CountrySelect";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export type EventFilters = {
  country: string;
  city?: string;
  startDate?: Date;
};

const EventFilter = ({
  value,
  onApply,
}: {
  value: EventFilters;
  onApply: (filters: EventFilters) => void;
}) => {
  const [country, setCountry] = useState<string>(value.country ?? "RS");
  const [city, setCity] = useState<string | undefined>(value.city);
  const [startDate, setStartDate] = useState<Date | undefined>(value.startDate);

  useEffect(() => {
    setCountry(value.country);
    setCity(value.city);
    setStartDate(value.startDate);
  }, [value]);

  const handleSearch = () => {
    onApply({ country, city, startDate });
  };
  const resetFilters = () => {
    setCountry("RS");
    setCity(undefined);
    setStartDate(undefined);
  };
  return (
    <Card>
      <div className="flex gap-4 items-center">
        <CountrySelect
          value={country}
          onSelect={(value) => setCountry(value)}
          hideLabel
        />
        <CitySelect
          countryCode={country}
          value={city || undefined}
          onSelect={(value) => setCity(value)}
          hideLabel
        />
        <DatePicker value={startDate} onChange={setStartDate} />
        <Button variant="outline" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Button onClick={handleSearch}>Search</Button>
    </Card>
  );
};

export default EventFilter;

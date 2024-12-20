import { AppStore } from "./app-store";
import { ArrowDown } from "./arrow-down";
import { CaretDown } from "./caret-down";
import { Filter } from "./filter";
import { GoLink } from "./go-link";
import { Logo } from "./logo";
import { Minus } from "./minus";
import { Pass } from "./pass";
import { PlayMarket } from "./play-market";
import { Plus } from "./plus";
import { Search } from "./search";

const icons = {
  Logo,
  AppStore,
  PlayMarket,
  Filter,
  CaretDown,
  Pass,
  Search,
  Plus,
  Minus,
  ArrowDown,
  GoLink,
};

export const Icon = ({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) => {
  const Result = icons[name];
  return <Result className={className ?? ""} />;
};

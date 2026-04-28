import Link from "next/link";
import css from "./SidebarNotes.module.css";

const tags = [
  { label: "All", value: "all" },
  { label: "Work", value: "work" },
  { label: "Personal", value: "personal" },
  { label: "Shopping", value: "shopping" },
  { label: "Todo", value: "todo" },
];

interface SidebarNotesProps {
  currentTag: string;
}

export default function SidebarNotes({ currentTag }: SidebarNotesProps) {
  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag.value} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag.value}`}
            className={`${css.menuLink} ${
              currentTag === tag.value ? css.active : ""
            }`}
          >
            {tag.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
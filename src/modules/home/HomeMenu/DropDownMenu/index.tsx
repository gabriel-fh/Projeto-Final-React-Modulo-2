import * as S from "../../styles";

import { useEffect, useRef, useState } from "react";

import { ProfileType } from "../../../../types";
import Avatar from "../../../../components/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import { IconArrow, IconLang } from "../../../../assets/Icons";
import { useLang } from "../../../../providers/LangProvider";

type Props = {
  onClose: () => void;
  onLogout: () => void;
  onChangeProfile: (id: ProfileType) => void;
  profile: ProfileType;
  profiles: ProfileType[];
};

export const DropDownMenu = ({
  profile,
  profiles,
  onClose,
  onChangeProfile,
  onLogout,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onClose]);

  const { changeLanguage, lang } = useLang();

  return (
    <S.DropDownMenu ref={ref}>
      <S.Options $hide={showLanguages}>
        <S.DropDownMenuItem $active>
          <Avatar image={profile.avatar.image} size="small" disabled />
          <span>{profile.name}</span>
        </S.DropDownMenuItem>

        {profiles.map((profile) => (
          <S.DropDownMenuItem
            key={profile.id}
            onClick={() => onChangeProfile(profile)}
          >
            <Avatar image={profile.avatar.image} size="small" disabled />
            <span>{profile.name}</span>
          </S.DropDownMenuItem>
        ))}
        <S.DropDownMenuItem onClick={() => setShowLanguages(!showLanguages)}>
          <IconLang />
          {t("home.dropDownMenu.button.lang.title")}
        </S.DropDownMenuItem>
        <S.DropDownMenuItem $border onClick={onLogout}>
          {t("home.dropDownMenu.button.signOut")}
        </S.DropDownMenuItem>
      </S.Options>
      <S.Language $hide={showLanguages}>
        <S.DropDownMenuItem onClick={() => setShowLanguages(false)}>
         <IconArrow />{t("home.dropDownMenu.button.back")}
        </S.DropDownMenuItem>
        <S.DropDownMenuItem $active={lang === 'en-US'} onClick={() => changeLanguage("en-US")}>
          {t("home.dropDownMenu.button.lang.option.en-US")}
        </S.DropDownMenuItem>
        <S.DropDownMenuItem $active={lang === 'pt-BR'} onClick={() => changeLanguage("pt-BR")}>
          {t("home.dropDownMenu.button.lang.option.pt-BR")}
        </S.DropDownMenuItem>
      </S.Language>
    </S.DropDownMenu>
  );
};

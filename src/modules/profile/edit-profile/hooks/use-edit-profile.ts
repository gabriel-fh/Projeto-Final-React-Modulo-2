import { useEffect, useState } from "react";
import { AvatarType } from "../../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProfileById } from "../../hooks/use-get-profiles";
import { usePutProfile } from "./use-put-profile";
import { AxiosError } from "axios";

export const useEditProfile = () => {

  const [name, setName] = useState("");
  const [selectedAvatar, setSelectedAvatar] = useState<AvatarType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSelectAvatar = (avatar: AvatarType) => {
    setIsOpen(false);
    setSelectedAvatar(avatar);
  };

  const { data, isLoading } = useGetProfileById(id);

  useEffect(() => {
    setLoading(isLoading);

    if (!isLoading && data) {
      setName(data.name);
      setSelectedAvatar(data.avatar);
    }
  }, [data, isLoading]);

  const { mutate: updateProfile } = usePutProfile({
    onSuccess: () => {
      setLoading(false);
      navigate("/profile");
    },
    onError: (error: unknown) => {
      setLoading(false);
      setError((error as AxiosError<{ message: string }>)?.response?.data?.message || "Something went wrong");
    }
  });

  const handleSave = () => {
    if (!selectedAvatar || !name) {
      return;
    }
    setLoading(true);
    
    updateProfile({
      id,
      params: {
        avatarId: String(selectedAvatar?.id) || "0",
        name,
      }
    });
  };

  const isDisabled = loading || !selectedAvatar || loading;

  return {
    id,
    name,
    selectedAvatar,
    isOpen,
    loading,
    error,
    isDisabled,
    setIsOpen,
    setName,
    handleSelectAvatar,
    handleSave,
    navigate,
  };
}
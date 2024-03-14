import { useEffect, useState } from "react";
import { ProfileType } from "../../../../types";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProfileById } from "../../hooks/use-get-profiles";
import { useDelProfile } from "./use-del-profile";
import { AxiosError } from "axios";

export const useDeleteProfile = () => {
  const [profile, setProfile] = useState<ProfileType | null>(null);

  const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const { data, isLoading, error } = useGetProfileById(id);

    useEffect(() => {
        setLoading(isLoading);
    
        if (!isLoading && data) {
            setProfile(data);
        }

        if(error) {
            setErr(error.message)
        }
    }, [isLoading, data, error])


    const { mutate: deleteProfile } = useDelProfile({
            onSuccess: () => {
                setLoading(false);
                navigate("/profile");
            },
            onError: (error) => {
                setLoading(false);
                
                const errorMessage = (error as unknown as AxiosError<{ message: string }>)?.response?.data?.message || "Something went wrong";
                setErr(errorMessage.includes("not found") || errorMessage.includes("404") ? "Perfil não encontrado" : 'Error ao deletar perfil');
                console.log(errorMessage);
            }
        });
    
      const handleDelete = async () => {
        if (!profile) {
          return;
        }
    
        setLoading(true);
    
        deleteProfile({ id: profile.id });
      };

  return {
    profile,
    err,
    loading,
    handleDelete
  };
};

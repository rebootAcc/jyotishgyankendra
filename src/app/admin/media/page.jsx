import { getMedia } from "@/actions/mediaactions";
import LogoutButton from "@/components/admin/LogoutButton";
import AddMedia from "@/feature/adminmedia/AddMedia";
import ManageMedia from "@/feature/adminmedia/ManageMedia";
import AdminDashboardTemplate from "@/templates/AdminDashboardTemplate";

const Media = async () => {
  //   const [media, setMedia] = useState([]);
  //   const [pagination, setPagination] = useState({});

  const { medias, pagination } = await getMedia();

  return (
    <AdminDashboardTemplate>
      <div className="h-[3rem] border-b border-[#00000033]">
        <div className="flex justify-end items-center gap-6 w-full ">
          <LogoutButton />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <AddMedia />
        <ManageMedia media={medias} pagination={pagination} />
      </div>
    </AdminDashboardTemplate>
  );
};

export default Media;

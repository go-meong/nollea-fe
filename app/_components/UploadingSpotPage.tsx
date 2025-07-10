import { ImageUploader } from "./ImageUploader";
import { MultiSelect } from "./MultiSelect";
import Postcode from "./Postcode";
import TimePicker from "./TimePicker";

export default function UploadingSpotPage() {
  return (
    <div>
      <Postcode />
      <TimePicker />
      <MultiSelect />
      <ImageUploader />
    </div>
  );
}

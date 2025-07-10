import { Text, TextInput } from "@vapor-ui/core";

export default function PlaceName({
  placeName,
  setPlaceName,
}: {
  placeName: string;
  setPlaceName: (placeName: string) => void;
}) {
  return (
    <TextInput.Root type="text" size="md" value={placeName} onValueChange={(value) => setPlaceName(value)}>
      <TextInput.Label>
        <Text
          typography="body2"
          style={{
            color: "var(--vapor-color-white)",
          }}
        >
          장소명 (20자 이내)
        </Text>
      </TextInput.Label>
      <TextInput.Field
        maxLength={20}
        className="w-full"
        style={{
          backgroundColor: "var(--vapor-color-gray-900)",
          borderColor: "var(--vapor-color-gray-900)",
          color: "var(--vapor-color-white)",
        }}
      />
    </TextInput.Root>
  );
}

import { Textarea } from "@/components/ui/textfield";
import { Text, TextInput } from "@vapor-ui/core";
export default function Description({
  description,
  setDescription,
}: {
  description: string;
  setDescription: (description: string) => void;
}) {
  return (
    <TextInput.Root type="text" size="md">
      <TextInput.Label>
        <Text
          typography="body2"
          style={{
            color: "var(--vapor-color-white)",
          }}
        >
          한줄 설명 (50자 이내)
        </Text>
      </TextInput.Label>
      <Textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={50}
        className="w-full"
        style={{
          outline: "none",
          backgroundColor: "var(--vapor-color-gray-900)",
          borderColor: "var(--vapor-color-gray-900)",
          color: "var(--vapor-color-white)",
        }}
      />
    </TextInput.Root>
  );
}

import { Form } from "remix";

export default function Index() {
  return (
    <Form>
      <select name="attributes">
        <option value="test">Test</option>
        <option value="test2">Test2</option>
      </select>
    </Form>
  );
}

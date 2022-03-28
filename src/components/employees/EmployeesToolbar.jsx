import {
  FlexSeparator,
  CardContent,
  Card,
  Button,
  Stack,
} from "components/common";
import EmployeesSearchForm from "./EmployeesSearchForm";

const EmployeesToolbar = (props) => {
  const { onGenerationData = Function.prototype } = props;

  return (
    <Card>
      <CardContent>
        <Stack>
          <EmployeesSearchForm />
          <FlexSeparator />
          <Stack>
            <Button onClick={() => onGenerationData()} variant="blue">
              Generation data
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default EmployeesToolbar;

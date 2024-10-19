import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
} from "@chakra-ui/react";

import Period2024 from "./ResumeBox/PeriodLatest";
import Period2023 from "./ResumeBox/Period2023";
import Period2022 from "./ResumeBox/Period2022";
import Period2005 from "./ResumeBox/Period2008";
import Period2004 from "./ResumeBox/Period2004";
import Period2002 from "./ResumeBox/Period2002";

const steps = [
  { period: "2024", description: <Period2024 /> },
  { period: "2023 - 2024", description: <Period2023 /> },
  { period: "2009 - 2022", description: <Period2022 /> },
  { period: "2005 - 2008", description: <Period2005 /> },
  { period: "2003 - 2004", description: <Period2004 /> },
  { period: "1998 - 2002", description: <Period2002 /> },
];

function Timeline() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper colorScheme="orange" index={activeStep} orientation="vertical" height="100%" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.period}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>
          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default Timeline;

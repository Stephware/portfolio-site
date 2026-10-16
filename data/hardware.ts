export type HardwareProject = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  flow: string[];
  status?: string;
};

export const hardwareProjects: HardwareProject[] = [
  {
    number: "H1",
    title: "ESP32 Sumobot Controller",
    description:
      "A mobile-controlled sumobot prototype combining motor-driver control with distance and edge sensing for remote operation, opponent detection, boundary awareness, and sensor-assisted movement.",
    tags: ["ESP32", "Flutter", "Motor Driver", "Distance Sensors", "Edge Sensors"],
    flow: ["Distance + edge sensing", "ESP32 movement logic", "Motor driver + mobile control"],
  },
  {
    number: "H2",
    title: "Smart Sensor–Actuator Automation System",
    description:
      "An automated sensing-and-response prototype that combines environmental monitoring and motion detection with servo actions, temperature alerts, and manual override through a Flutter dashboard.",
    tags: ["ESP32", "DHT11", "PIR Sensor", "Flutter", "Servo Motors"],
    flow: ["DHT11 + PIR sensing", "Automatic decision logic", "Servo / alert response + manual override"],
  },
  {
    number: "H3",
    title: "Digital Door Lock Using Logic Circuits",
    description:
      "A configurable hardware-only security prototype that supports password setting, changing, and verification through interconnected combinational and sequential logic circuitry.",
    tags: ["Logic ICs", "Comparators", "Flip-Flops", "DIP Switches", "Breadboard"],
    flow: ["DIP-switch password input", "Comparator + sequential logic", "Set / change / verify access"],
  },
  {
    number: "H4",
    title: "Spider Robot — Multi-Legged Embedded Robotic System",
    description:
      "An in-progress multi-legged robotic prototype focused on coordinated servo-driven movement, stable directional control, obstacle detection, and sensor-responsive behavior as a foundation for autonomous mobility.",
    tags: ["ESP32", "C/C++", "PWM", "GPIO", "Servo Motors", "Sensors"],
    flow: ["Servo leg sequencing", "Directional movement", "Obstacle / sensor response"],
    status: "In progress",
  },
  {
    number: "H5",
    title: "Smart Environmental Monitoring System",
    description:
      "An end-to-end environmental monitoring prototype that exposes live temperature and humidity measurements remotely through a Flutter mobile dashboard over Wi-Fi.",
    tags: ["ESP32", "C/C++", "Flutter", "DHT22", "HTTP", "Wi-Fi"],
    flow: ["DHT22 measurement", "ESP32 Wi-Fi / HTTP", "Flutter dashboard"],
  },
  {
    number: "H6",
    title: "Embedded Motor and Actuator Control System",
    description:
      "A wireless actuator-control prototype combining servo positioning, bidirectional stepper movement, adjustable output control, analog input monitoring, and real-time actuator status in one Flutter-operated interface.",
    tags: ["ESP32", "Flutter", "PWM", "GPIO", "ADC", "Servo", "Stepper Motor"],
    flow: ["Flutter control commands", "ESP32 PWM / GPIO / ADC", "Servo + stepper actuation"],
  },
  {
    number: "H7",
    title: "Spinergy — Rotary-Controlled Power Supply",
    description:
      "A practical multi-output DC power supply with selectable approximately 1.25 V, 3 V, 6 V, 9 V, and 12 V outputs, assembled on a soldered PCB and validated through multimeter testing.",
    tags: ["LM317T", "Voltage Regulation", "PCB Assembly", "Soldering", "Multimeter"],
    flow: ["DC input + regulation", "Rotary output selection", "LED indication + measured output"],
  },
];

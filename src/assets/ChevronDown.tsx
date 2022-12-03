const ChevronDown = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`stroke-color--primary h-4 w-4 fill-none stroke-2 transition-all duration-300 ease-in-out ${
      isExpanded ? '-rotate-180' : 'rotate-0'
    } motion-reduce:transition-none`}
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default ChevronDown;

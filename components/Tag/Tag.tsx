import { styled } from '@/theme/stitches.config';

type TagProps = {
  text: string;
};

const TagLabel = styled('p', {
  backgroundColor: '$green60',
  borderColor: '$green60',
  borderRadius: '$100',
  borderStyle: 'solid',
  borderWidth: '$thin',
  color: '$white',
  padding: '$100 $200',
  textAlign: 'center',
  width: 'fit-content',
});

export const Tag = ({ text, ...props }: TagProps) => {
  return (
    <TagLabel data-testid="tag-label" {...props}>
      <span>{text}</span>
    </TagLabel>
  );
};

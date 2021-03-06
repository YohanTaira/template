import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

const Knowledge: React.FC = () => {
  return (
    <Container>
      <SectionTitle title="Knowledge"/>
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5/>}/>
        <KnowledgeItem title="CSS" icon={<FaCss3Alt/>}/>
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript/>}/>
        <KnowledgeItem title="React" icon={<FaReact/>}/>
      </section>
    </Container>
  );
};

export default Knowledge;

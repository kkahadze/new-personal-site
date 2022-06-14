import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import p1 from '../public/images/works/P1.png'
import p2 from '../public/images/works/P2.png'
import p3 from '../public/images/works/P3.png'
import p4 from '../public/images/works/P4.png'
// import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
// import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
// import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'
// import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
// import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Joker AI" thumbnail={p1}>
          Using Python I implemented the card game of Joker, then utilizied data from
          AI self play in order to create a more intelligent Joker AI for the game
          which can make decisions based on the game's state based on training data,
          using the K-Nearest Neighbors Classifier.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="NYC Crime Analysis"
            thumbnail={p2}
          >
           Created a step-by-step guide demonstrating how our team used Pandas and NumPy to 
           clean NYC crime data, Matplotlib to visualize it, and a Scikit-Learn regressor in 
           order to predict the future of NYC crime for the coming months in select boroughs.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="UFC Fight Map"
            thumbnail={p3}
          >
            Designed a graph illustrating connections between UFC fighters 
            between different UFC weight classes by using a Force Directed Layout in D3.js.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="menkiki" thumbnail={p4} title="Old Personal Website">
          This is my old personal website that I built using React and Next.js.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'

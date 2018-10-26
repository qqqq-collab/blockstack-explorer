import React from 'react';
import { fetchBlock } from '@common/lib/client/api';
import { NamesList } from '@containers/lists/names';
import { TxList } from '@containers/lists/tx-list';
import { Card } from '@components/card';
import { BlockCard } from '@containers/cards/block';
import { Page } from '@components/page';

class BlocksSinglePage extends React.Component {
  static async getInitialProps({ req, query }) {
    const hash = req && req.params ? req.params.hash : query.hash;
    const data = query.data || (await fetchBlock(hash));
    const transactions = data.transactions && data.transactions.length ? data.transactions : [];
    const nameOperations = data.nameOperations && data.nameOperations.length ? data.nameOperations : [];
    return {
      block: {
        hash,
        ...data,
      },
      transactions,
      nameOperations,
      meta: {
        title: `Block ${data && data.height}`,
      },
    };
  }

  render() {
    return (
      <Page>
        <BlockCard mr={[0, 0, 5]} mb={[5, 5, 0]} width={['100%', '100%', '380px']} block={this.props.block} />
        <Page.Main>
          {this.props.nameOperations.length ? (
            <Card width={1} mb={[5, 5, 5]} title="Name Operations">
              <NamesList />
            </Card>
          ) : null}
          {this.props.transactions.length ? (
            <Card width={1} mb={[5, 5, 0]} title="Transactions">
              <TxList />
            </Card>
          ) : null}
        </Page.Main>
      </Page>
    );
  }
}

export default BlocksSinglePage;

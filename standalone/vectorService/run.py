import tensorflow_hub as hub
import tensorflow.compat.v1 as tf
import numpy as np
from matplotlib import pyplot as plt
import connection

tf.disable_eager_execution()

# Code adjusted from https://medium.com/@adriensieg/text-similarities-da019229c894

class encoder:
    module_url = "https://tfhub.dev/google/universal-sentence-encoder/1?tf-hub-format=compressed"
    def __init__(self):
        embed = hub.Module(self.module_url)
        self.similarity_input_placeholder = tf.placeholder(tf.string, shape=(None))
        self.similarity_message_encodings = embed(self.similarity_input_placeholder)
        self.encode(self.getText())

    def getText(self):
        cursor = connection.collection.find({},{"text.$":1}).limit(10)
        processed = []
        for i, doc in enumerate(cursor):
            processed.append(doc)
        return processed
       

    def encode(self, messages):
        with tf.Session() as session:
            print(5)
            session.run(tf.global_variables_initializer())
            session.run(tf.tables_initializer())
            texts = [x["text"].lower() for x in messages]
            ids = [x["_id"] for x in messages]
            message_embeddings_ = session.run(self.similarity_message_encodings, feed_dict={self.similarity_input_placeholder: texts})
            corr = np.inner(message_embeddings_, message_embeddings_)
            print(corr)
            print(6)
            self.heatmap(ids, ids, corr)

    def heatmap(self, x_labels, y_labels, values):
        fig, ax = plt.subplots()
        im = ax.imshow(values)
        # We want to show all ticks...
        ax.set_xticks(np.arange(len(x_labels)))
        ax.set_yticks(np.arange(len(y_labels)))
        # ... and label them with the respective list entries
        ax.set_xticklabels(x_labels)
        ax.set_yticklabels(y_labels)

        # Rotate the tick labels and set their alignment.
        plt.setp(ax.get_xticklabels(), rotation=45, ha="right", fontsize=10,
            rotation_mode="anchor")

        # Loop over data dimensions and create text annotations.
        for i in range(len(y_labels)):
            for j in range(len(x_labels)):
                text = ax.text(j, i, "%.2f"%values[i, j], ha="center", va="center", color="w", fontsize=6)

        fig.tight_layout()
        plt.show()


x = encoder()

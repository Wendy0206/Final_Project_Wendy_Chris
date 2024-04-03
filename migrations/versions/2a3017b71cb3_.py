"""empty message

Revision ID: 2a3017b71cb3
Revises: 537555e77ef7
Create Date: 2024-04-02 23:25:45.376936

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2a3017b71cb3'
down_revision = '537555e77ef7'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('user_full_name_key', type_='unique')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.create_unique_constraint('user_full_name_key', ['full_name'])

    # ### end Alembic commands ###

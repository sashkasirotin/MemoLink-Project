import { Grid } from '@mantine/core';

export default function Categories({ names }) {

    return (
        <Grid gutter="md">
            {names && names.map((name, index) => (
                <Grid.Col span={4} key={index}>{name}</Grid.Col>
            ))}
        </Grid>
    );
}
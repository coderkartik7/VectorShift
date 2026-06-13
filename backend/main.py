from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

class Pipeline(BaseModel):
    nodes: list
    edges: list

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes, edges):
    adjacency = {node['id']: [] for node in nodes}
    for edge in edges:
        adjacency[edge['source']].append(edge['target'])

    visited = {node['id']: 0 for node in nodes}

    def dfs(node_id):
        if visited[node_id] == 1:
            return False
        if visited[node_id] == 2:
            return True
        visited[node_id] = 1
        for neighbor in adjacency[node_id]:
            if not dfs(neighbor):
                return False
        visited[node_id] = 2
        return True

    return all(dfs(node['id']) for node in nodes)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)
    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag(pipeline.nodes, pipeline.edges)}

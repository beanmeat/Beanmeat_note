package com.io.nio;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.SelectableChannel;
import java.nio.channels.SelectionKey;
import java.nio.channels.Selector;
import java.nio.channels.SocketChannel;
import java.util.Iterator;

/**
 * NIO客户端
 */
public class NIOClient {
    public static void main(String[] args) throws IOException {
        SocketChannel channel = SocketChannel.open();
        channel.configureBlocking(false);
        Selector selector = Selector.open();
        // 客户端连接服务器
        channel.connect(new InetSocketAddress("127.0.0.1",9090));
        channel.register(selector, SelectionKey.OP_CONNECT);

        // 轮询selector
        while(true) {
            // 阻塞等待，实际上selector值对应一个客户端
            selector.select();
            Iterator<SelectionKey> iterator = selector.selectedKeys().iterator();
            while(iterator.hasNext()) {
                SelectionKey key = iterator.next();
                if(key.isConnectable()) {
                    // 如果是连接
                    SocketChannel socketChannel = (SocketChannel)key.channel();
                    // 如果是正在连接，则完成连接
                    if (socketChannel.isConnectionPending()) {
                        socketChannel.finishConnect();
                        socketChannel.configureBlocking(false);
                        ByteBuffer buffer = ByteBuffer.wrap("hello server".getBytes());
                        // 缓存区中的数据写到通道里
                        socketChannel.write(buffer);
                        // 监听读事件，可以获取服务器返回的数据
                        socketChannel.register(selector,SelectionKey.OP_READ);
                    }
                } else if (key.isReadable()) {
                    // 读服务器返回的数据
                    SocketChannel socketChannel = (SocketChannel)key.channel();
                    ByteBuffer buffer = ByteBuffer.allocate(1024);
                    int len = socketChannel.read(buffer);
                    if(len != -1){
                        System.out.println("receive server client:" + new String(buffer.array(),0,len));
                    }
                    iterator.remove();
                }
            }
        }
    }
}
